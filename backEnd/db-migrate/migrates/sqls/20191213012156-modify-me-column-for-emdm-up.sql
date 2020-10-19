alter table wiprocurement.bom_projects add column if not exists project_source varchar default null;
alter table wiprocurement.bom_projects add column if not exists source_version varchar default null;
alter table wiprocurement.bom_stage_version drop column if exists source_version;
alter table wiprocurement.bom_item add column if not exists source_item_id varchar default null;
alter table wiprocurement.bom_item_complete_version add column if not exists source_item_id varchar default null;
alter table wiprocurement.bom_projects alter column customer type varchar(4000);
alter table wiprocurement.bom_projects alter column project_code type varchar(4000);
alter table wiprocurement.bom_projects alter column project_leader type varchar(4000);
alter table wiprocurement.bom_projects alter column approved_by type varchar(4000);
alter table wiprocurement.bom_projects alter column project_name type varchar(4000);