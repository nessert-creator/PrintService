namespace QC.MF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class fany2019100101 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Yewujiesuanshenqingshus", "Telephone", c => c.String());
            AlterColumn("dbo.Yewujiesuanshenqingshus", "Money", c => c.Decimal(nullable: false, precision: 18, scale: 2));
            AlterColumn("dbo.Yewujiesuanshenqingshus", "Pay", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Yewujiesuanshenqingshus", "Pay", c => c.Int(nullable: false));
            AlterColumn("dbo.Yewujiesuanshenqingshus", "Money", c => c.Int(nullable: false));
            AlterColumn("dbo.Yewujiesuanshenqingshus", "Telephone", c => c.Int(nullable: false));
        }
    }
}
