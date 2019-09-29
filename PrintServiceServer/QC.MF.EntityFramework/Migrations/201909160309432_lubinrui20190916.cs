namespace QC.MF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class lubinrui20190916 : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Xianjinjiaokuandans", "Thousand1");
            DropColumn("dbo.Xianjinjiaokuandans", "Hundred1");
            DropColumn("dbo.Xianjinjiaokuandans", "Ten1");
            DropColumn("dbo.Xianjinjiaokuandans", "TenThousand");
            DropColumn("dbo.Xianjinjiaokuandans", "Thousand2");
            DropColumn("dbo.Xianjinjiaokuandans", "Hundred2");
            DropColumn("dbo.Xianjinjiaokuandans", "Ten2");
            DropColumn("dbo.Xianjinjiaokuandans", "Yuan");
            DropColumn("dbo.Xianjinjiaokuandans", "Jiao");
            DropColumn("dbo.Xianjinjiaokuandans", "Fen");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Xianjinjiaokuandans", "Fen", c => c.Int(nullable: false));
            AddColumn("dbo.Xianjinjiaokuandans", "Jiao", c => c.Int(nullable: false));
            AddColumn("dbo.Xianjinjiaokuandans", "Yuan", c => c.Int(nullable: false));
            AddColumn("dbo.Xianjinjiaokuandans", "Ten2", c => c.Int(nullable: false));
            AddColumn("dbo.Xianjinjiaokuandans", "Hundred2", c => c.Int(nullable: false));
            AddColumn("dbo.Xianjinjiaokuandans", "Thousand2", c => c.Int(nullable: false));
            AddColumn("dbo.Xianjinjiaokuandans", "TenThousand", c => c.Int(nullable: false));
            AddColumn("dbo.Xianjinjiaokuandans", "Ten1", c => c.Int(nullable: false));
            AddColumn("dbo.Xianjinjiaokuandans", "Hundred1", c => c.Int(nullable: false));
            AddColumn("dbo.Xianjinjiaokuandans", "Thousand1", c => c.Int(nullable: false));
        }
    }
}
