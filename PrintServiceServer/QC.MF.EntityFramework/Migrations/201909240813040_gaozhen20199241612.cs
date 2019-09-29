namespace QC.MF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class gaozhen20199241612 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Jszhsqshus", "Voucher", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Jszhsqshus", "Voucher");
        }
    }
}
