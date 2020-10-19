import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import Button from '~~elements/Button';
import Table from '~~elements/Table';
import Icon, { IconName } from '~~elements/Icon';
import { InlineBtns, InnerContainer } from '~~features/Database/DatabaseStyles';
import SearchBar from '~~features/Database/components/SearchBar';
import ArchiveSwitch from '~~features/Database/components/ArchiveSwitch';
import * as DatabaseActions from '~~features/Database/DatabaseActions';
import * as PlasticCleanSheetActions from '~~features/Database/ME/PlasticCleanSheet/PlasticCleanSheetActions';
import useCSDB from '~~features/Database/components/useCSDB';
import getColumns from './ColumnSetting';
import AddModal from './AddModal';

const EmbeddedNailPrice = (props) => {
  const {
    location,
    // state
    embeddedNailPriceList,
    date,
    activeProductType,
    // action
    getEmbeddedNailPriceList,
    updateEmbeddedNailPrice,
    setProductType,
  } = props;

  useEffect(() => {
    if (activeProductType) {
      getEmbeddedNailPriceList();
    }
  }, [JSON.stringify(activeProductType)]);

  // 需要丟給useCSDB的props
  const extendsCSDBPorps = {
    location,
    setProductType,
    mainTable: embeddedNailPriceList,
    initialSortInfo: { dataIndex: '', sortOrder: 'ascend' },
    initialFilterInfo: { keyword: '', dataIndex: 'name' },
    mainTableUpdater: updateEmbeddedNailPrice,
  };
  const csdb = useCSDB(extendsCSDBPorps);
  const {
    // For table
    isEditMode,
    mainTableList,
    editModeList,
    handleTableChange,
    handleSetEditMode,
    handleOnEditItem,
    handleSave,
    // For search bar
    keyword,
    setKeyword,
    handleSearch,
    handleResetSearchBar,
    // For checkbox
    showArchive,
    setShowArchive,
    checkboxColumn,
    // For add modal
    isAddModalOpen,
    setAddModal,
    // 流水號
    idColumn,
  } = csdb;

  // 需要丟給ColumnSetting的props
  const extendsColumnPorps = {
    ...props,
    isEditMode,
    date,
    checkboxColumn,
    handleOnEditItem,
    idColumn,
  };
  return (
    <InnerContainer>
      <div className="inner-content">
        <div className="content-header">
          <div className="title">
            埋釘製程價目表
            <div className="description">Unit: USD</div>
          </div>
        </div>
        <div className="content-row">
          <InlineBtns>
            <SearchBar
              width="25rem"
              placeholder="Enter Type"
              value={keyword}
              onInputChange={setKeyword}
              onSearch={handleSearch}
              onReset={handleResetSearchBar}
              disabled={isEditMode}
            />
            {/* <ArchiveSwitch
              isChecked={showArchive}
              onChange={() => setShowArchive(!showArchive)}
              disabled={true}
            /> */}
          </InlineBtns>
          {
            isEditMode ?
              <InlineBtns>
                <Button
                  color="black"
                  border={false}
                  round
                  onClick={() => handleSetEditMode(false)}
                >Cancel
                </Button>
                <Button
                  color="green"
                  border={false}
                  round
                  onClick={() => handleSave('embeddedPriceList', { nextId: date.nextId })}
                >Save
                </Button>
              </InlineBtns> :
              <InlineBtns>
                {/* 新增 */}
                {/* <Icon
                  icon={IconName.BtnAddGroup}
                  size="2rem"
                  onClick={() => setAddModal(true)}
                  disabled={true}
                /> */}
                {/* 修改 */}
                <Icon
                  icon={IconName.BtnEditGroup}
                  size="2rem"
                  onClick={() => handleSetEditMode(true)}
                  disabled={mainTableList.length === 0 || !date.nextId}
                />
                {/* 封存 */}
                {/* <Icon
                  icon={IconName.BtnArchive}
                  size="2rem"
                  // onClick={() => handleArchive()}
                  // disabled={selectedIdList.length === 0}
                  disabled={true}
                /> */}
              </InlineBtns>
          }
        </div>
        <Table
          headerColor="blue"
          columns={getColumns(extendsColumnPorps)}
          dataSource={isEditMode ? editModeList : mainTableList}
          pagination={false}
          onChange={handleTableChange}
        />
      </div>

      {/* Add Modal  */}
      <AddModal
        isOpen={isAddModalOpen}
        setAddModal={setAddModal}
      />
    </InnerContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    embeddedNailPriceList: state.plasticCleanSheet.embeddedNailPrice.embeddedNailPriceList,
    date: state.plasticCleanSheet.embeddedNailPrice.date,
    activeProductType: state.dataBase.common.activeProductType,
  };
};

const mapDispatchToProps = {
  getEmbeddedNailPriceList: PlasticCleanSheetActions.getEmbeddedNailPriceList,
  updateEmbeddedNailPrice: PlasticCleanSheetActions.updateEmbeddedNailPrice,
  setProductType: DatabaseActions.setProductType,
};


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(EmbeddedNailPrice);
