namespace QC.MF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class fany20191003 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Yewujiesuanshenqingshus", "Year", c => c.Int(nullable: false));
            AddColumn("dbo.Yewujiesuanshenqingshus", "Month", c => c.Int(nullable: false));
            AddColumn("dbo.Yewujiesuanshenqingshus", "Day", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Yewujiesuanshenqingshus", "Day");
            DropColumn("dbo.Yewujiesuanshenqingshus", "Month");
            DropColumn("dbo.Yewujiesuanshenqingshus", "Year");
        }
    }
}
