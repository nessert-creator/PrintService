namespace QC.MF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class lubinrui201909241610 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Shouqunweituoshus1", "Nian", c => c.String());
            AddColumn("dbo.Shouqunweituoshus1", "Yue", c => c.String());
            AddColumn("dbo.Shouqunweituoshus1", "Ri", c => c.String());
            AddColumn("dbo.Shouqunweituoshus2", "Nian", c => c.String());
            AddColumn("dbo.Shouqunweituoshus2", "Yue", c => c.String());
            AddColumn("dbo.Shouqunweituoshus2", "Ri", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Shouqunweituoshus2", "Ri");
            DropColumn("dbo.Shouqunweituoshus2", "Yue");
            DropColumn("dbo.Shouqunweituoshus2", "Nian");
            DropColumn("dbo.Shouqunweituoshus1", "Ri");
            DropColumn("dbo.Shouqunweituoshus1", "Yue");
            DropColumn("dbo.Shouqunweituoshus1", "Nian");
        }
    }
}
