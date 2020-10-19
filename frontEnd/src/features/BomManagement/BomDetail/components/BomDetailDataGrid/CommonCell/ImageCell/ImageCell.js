import React, { useState } from 'react';
import Icon, { IconName } from '~~elements/Icon';
import Button from '~~elements/Button';

import PreviewImage from '~~elements/PreviewImage';

/*
Usage:
<BaseCell
  value={rows[rowIndex][Columns[columnIndex]['key']]}
  cellInfo={{ columnIndex, key, rowIndex, style: extendStyle }}
/>

*/
function ImageCell(props) {
  const [preview, setPreview] = useState({ isOpen: false, url: '' });

  const {
    cellInfo: { columnIndex, key, rowIndex, style },
    value
  } = props;

  const handleClick = (e) => {
    e.stopPropagation();
    setPreview({ url: value, isOpen: true });
  };
  if (!value) {
    return <div className="grid-cell" key={key} style={style} />;
  }
  return (
    <div className="grid-cell" key={key} style={style}>
      <Icon icon={IconName.BtnImage} onClick={handleClick} size="1.4rem" />
      <PreviewImage
        image={preview.url}
        isOpen={preview.isOpen}
        toggleClose={() => { setPreview({ ...preview, isOpen: false }); }}
      />
    </div>
  );
}

export default ImageCell;
