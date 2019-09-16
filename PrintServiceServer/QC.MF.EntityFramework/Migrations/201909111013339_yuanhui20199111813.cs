namespace QC.MF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class yuanhui20199111813 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Powerbooks", "Number_1", c => c.String());
            AlterColumn("dbo.Powerbooks", "PhoneNumber_1", c => c.String());
            AlterColumn("dbo.Powerbooks", "Number_2", c => c.String());
            AlterColumn("dbo.Powerbooks", "PhoneNumber_2", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Powerbooks", "PhoneNumber_2", c => c.Int(nullable: false));
            AlterColumn("dbo.Powerbooks", "Number_2", c => c.Int(nullable: false));
            AlterColumn("dbo.Powerbooks", "PhoneNumber_1", c => c.Int(nullable: false));
            AlterColumn("dbo.Powerbooks", "Number_1", c => c.Int(nullable: false));
        }
    }
}
