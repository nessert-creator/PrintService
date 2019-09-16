namespace QC.MF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class lubinrui201909101524 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Xianjinjiaokuandans",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        AccountName = c.String(),
                        AccountNumber = c.Int(nullable: false),
                        OpeningBank = c.String(),
                        Abstract = c.String(),
                        Money = c.String(),
                        Thousand1 = c.Int(nullable: false),
                        Hundred1 = c.Int(nullable: false),
                        Ten1 = c.Int(nullable: false),
                        TenThousand = c.Int(nullable: false),
                        Thousand2 = c.Int(nullable: false),
                        Hundred2 = c.Int(nullable: false),
                        Ten2 = c.Int(nullable: false),
                        Yuan = c.Int(nullable: false),
                        Jiao = c.Int(nullable: false),
                        Fen = c.Int(nullable: false),
                        BankSpecialColumn = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Xianjinjiaokuandans");
        }
    }
}
