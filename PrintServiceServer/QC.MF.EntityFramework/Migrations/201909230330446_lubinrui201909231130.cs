namespace QC.MF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class lubinrui201909231130 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Shouqunweituoshus1",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        BankName = c.String(),
                        Name = c.String(),
                        IdType = c.String(),
                        IdNumber = c.Int(nullable: false),
                        Post = c.String(),
                        Seal = c.String(),
                        Phone = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Shouqunweituoshus2",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        BankName = c.String(),
                        Name = c.String(),
                        IdType = c.String(),
                        IdNumber = c.Int(nullable: false),
                        Department = c.String(),
                        Post = c.String(),
                        Other = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Shouqunweituoshus2");
            DropTable("dbo.Shouqunweituoshus1");
        }
    }
}
