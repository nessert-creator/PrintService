namespace QC.MF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class zhangyunfei2019926 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Shouquanshus", "Telephonenumber", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Shouquanshus", "Telephonenumber", c => c.Int(nullable: false));
        }
    }
}
