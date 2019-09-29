namespace QC.MF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class lubinrui201909281511 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Shouqunweituoshus1", "BingXing", c => c.String());
            AddColumn("dbo.Shouqunweituoshus1", "FeiZhi", c => c.String());
            AddColumn("dbo.Shouqunweituoshus2", "Add", c => c.String());
            AddColumn("dbo.Shouqunweituoshus2", "BianGeng", c => c.String());
            AddColumn("dbo.Shouqunweituoshus2", "ShanXiao", c => c.String());
            AddColumn("dbo.Shouqunweituoshus2", "MiZhi", c => c.String());
            AddColumn("dbo.Shouqunweituoshus2", "MiJie", c => c.String());
            AddColumn("dbo.Shouqunweituoshus2", "QianYue", c => c.String());
            AddColumn("dbo.Shouqunweituoshus2", "JieYue", c => c.String());
            AddColumn("dbo.Shouqunweituoshus2", "HuanBu", c => c.String());
            AddColumn("dbo.Shouqunweituoshus2", "ZengHao", c => c.String());
            AddColumn("dbo.Shouqunweituoshus2", "CheXiao", c => c.String());
            AddColumn("dbo.Shouqunweituoshus2", "XiuGai", c => c.String());
            AddColumn("dbo.Shouqunweituoshus2", "GouMai", c => c.String());
            AddColumn("dbo.Shouqunweituoshus2", "ShuHui", c => c.String());
            AddColumn("dbo.Shouqunweituoshus2", "FengGu", c => c.String());
            AddColumn("dbo.Shouqunweituoshus2", "DaoDong", c => c.String());
            AddColumn("dbo.Shouqunweituoshus2", "ZhiHuan", c => c.String());
            AddColumn("dbo.Shouqunweituoshus2", "BuFa", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Shouqunweituoshus2", "BuFa");
            DropColumn("dbo.Shouqunweituoshus2", "ZhiHuan");
            DropColumn("dbo.Shouqunweituoshus2", "DaoDong");
            DropColumn("dbo.Shouqunweituoshus2", "FengGu");
            DropColumn("dbo.Shouqunweituoshus2", "ShuHui");
            DropColumn("dbo.Shouqunweituoshus2", "GouMai");
            DropColumn("dbo.Shouqunweituoshus2", "XiuGai");
            DropColumn("dbo.Shouqunweituoshus2", "CheXiao");
            DropColumn("dbo.Shouqunweituoshus2", "ZengHao");
            DropColumn("dbo.Shouqunweituoshus2", "HuanBu");
            DropColumn("dbo.Shouqunweituoshus2", "JieYue");
            DropColumn("dbo.Shouqunweituoshus2", "QianYue");
            DropColumn("dbo.Shouqunweituoshus2", "MiJie");
            DropColumn("dbo.Shouqunweituoshus2", "MiZhi");
            DropColumn("dbo.Shouqunweituoshus2", "ShanXiao");
            DropColumn("dbo.Shouqunweituoshus2", "BianGeng");
            DropColumn("dbo.Shouqunweituoshus2", "Add");
            DropColumn("dbo.Shouqunweituoshus1", "FeiZhi");
            DropColumn("dbo.Shouqunweituoshus1", "BingXing");
        }
    }
}
