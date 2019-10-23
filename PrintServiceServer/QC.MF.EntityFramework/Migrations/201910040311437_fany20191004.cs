namespace QC.MF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class fany20191004 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Yewujiesuanshenqingshus", "Provice", c => c.String());
            AddColumn("dbo.Yewujiesuanshenqingshus", "City", c => c.String());
            AddColumn("dbo.Yewujiesuanshenqingshus", "Extra", c => c.String());
            DropColumn("dbo.Yewujiesuanshenqingshus", "Addiess");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Yewujiesuanshenqingshus", "Addiess", c => c.String());
            DropColumn("dbo.Yewujiesuanshenqingshus", "Extra");
            DropColumn("dbo.Yewujiesuanshenqingshus", "City");
            DropColumn("dbo.Yewujiesuanshenqingshus", "Provice");
        }
    }
}
