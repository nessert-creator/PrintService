namespace QC.MF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class fany1104 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Ywdlsqbiaos", "Idnumber", c => c.String());
            AlterColumn("dbo.Ywdlsqbiaos", "Idnumber2", c => c.String());
            AlterColumn("dbo.Ywdlsqbiaos", "Idnumber1", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Ywdlsqbiaos", "Idnumber1", c => c.Int(nullable: false));
            AlterColumn("dbo.Ywdlsqbiaos", "Idnumber2", c => c.Int(nullable: false));
            AlterColumn("dbo.Ywdlsqbiaos", "Idnumber", c => c.Int(nullable: false));
        }
    }
}
