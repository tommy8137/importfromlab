-- 修正新增的me-others path不一致
update wiprocurement.drop_down_item set path=replace(path,'ME-OTHERS.','MEOTHERS.') where path like 'ME-OTHERS.%' and layout_name='bom_item' AND field_name IN ('parts_ctgy_1', 'parts_ctgy_2', 'material_spec', 'material');