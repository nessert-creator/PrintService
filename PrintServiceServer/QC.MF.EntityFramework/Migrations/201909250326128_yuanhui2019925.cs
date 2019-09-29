namespace QC.MF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class yuanhui2019925 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Registrations", "Year_3", c => c.Int(nullable: false));
            AddColumn("dbo.Registrations", "Month_3", c => c.Int(nullable: false));
            AddColumn("dbo.Registrations", "Day_3", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Registrations", "Day_3");
            DropColumn("dbo.Registrations", "Month_3");
            DropColumn("dbo.Registrations", "Year_3");
        }
    }
}
