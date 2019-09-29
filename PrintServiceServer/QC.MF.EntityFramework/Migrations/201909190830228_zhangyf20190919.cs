namespace QC.MF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class zhangyf20190919 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Jingzhangdans", "Chupiaorenzh", c => c.String());
            AlterColumn("dbo.Jingzhangdans", "Shoukuanrenzh", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Jingzhangdans", "Shoukuanrenzh", c => c.Int(nullable: false));
            AlterColumn("dbo.Jingzhangdans", "Chupiaorenzh", c => c.Int(nullable: false));
        }
    }
}
