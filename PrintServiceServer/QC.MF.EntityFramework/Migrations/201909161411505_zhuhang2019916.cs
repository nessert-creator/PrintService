namespace QC.MF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class zhuhang2019916 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Yewujiesuanshenqingshus", "Account2", c => c.String());
            AddColumn("dbo.Yewujiesuanshenqingshus", "Pay", c => c.Int(nullable: false));
            AddColumn("dbo.Yewujiesuanshenqingshus", "Nationality", c => c.String());
            AddColumn("dbo.Yewujiesuanshenqingshus", "Type", c => c.String());
            AddColumn("dbo.Yewujiesuanshenqingshus", "Professional", c => c.String());
            AddColumn("dbo.Yewujiesuanshenqingshus", "Number", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Yewujiesuanshenqingshus", "Number");
            DropColumn("dbo.Yewujiesuanshenqingshus", "Professional");
            DropColumn("dbo.Yewujiesuanshenqingshus", "Type");
            DropColumn("dbo.Yewujiesuanshenqingshus", "Nationality");
            DropColumn("dbo.Yewujiesuanshenqingshus", "Pay");
            DropColumn("dbo.Yewujiesuanshenqingshus", "Account2");
        }
    }
}
