namespace QC.MF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class lubinrui201909241605 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Shouqunweituoshus1", "IdNumber", c => c.String());
            AlterColumn("dbo.Shouqunweituoshus1", "Phone", c => c.String());
            AlterColumn("dbo.Shouqunweituoshus2", "IdNumber", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Shouqunweituoshus2", "IdNumber", c => c.Int(nullable: false));
            AlterColumn("dbo.Shouqunweituoshus1", "Phone", c => c.Int(nullable: false));
            AlterColumn("dbo.Shouqunweituoshus1", "IdNumber", c => c.Int(nullable: false));
        }
    }
}
