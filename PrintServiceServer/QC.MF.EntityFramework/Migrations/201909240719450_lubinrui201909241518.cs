namespace QC.MF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class lubinrui201909241518 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Xianjinjiaokuandans", "Nian", c => c.String());
            AddColumn("dbo.Xianjinjiaokuandans", "Yue", c => c.String());
            AddColumn("dbo.Xianjinjiaokuandans", "Ri", c => c.String());
            AlterColumn("dbo.Xianjinjiaokuandans", "AccountNumber", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Xianjinjiaokuandans", "AccountNumber", c => c.Int(nullable: false));
            DropColumn("dbo.Xianjinjiaokuandans", "Ri");
            DropColumn("dbo.Xianjinjiaokuandans", "Yue");
            DropColumn("dbo.Xianjinjiaokuandans", "Nian");
        }
    }
}
