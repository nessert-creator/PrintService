namespace QC.MF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class yuanhui2019924905 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Registrations", "Gender_1", c => c.String());
            AddColumn("dbo.Registrations", "Gender_2", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Registrations", "Gender_2");
            DropColumn("dbo.Registrations", "Gender_1");
        }
    }
}
