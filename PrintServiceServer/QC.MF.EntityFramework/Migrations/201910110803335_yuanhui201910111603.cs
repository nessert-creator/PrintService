namespace QC.MF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class yuanhui201910111603 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.KailiApplyBooks", "Year", c => c.Int(nullable: false));
            AddColumn("dbo.KailiApplyBooks", "Moth", c => c.Int(nullable: false));
            AddColumn("dbo.KailiApplyBooks", "Day", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.KailiApplyBooks", "Day");
            DropColumn("dbo.KailiApplyBooks", "Moth");
            DropColumn("dbo.KailiApplyBooks", "Year");
        }
    }
}
