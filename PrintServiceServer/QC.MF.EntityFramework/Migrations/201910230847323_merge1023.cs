namespace QC.MF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class merge1023 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Bgyhjszhsqs",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Customername = c.String(),
                        Bankcode = c.String(),
                        Accountnumber = c.String(),
                        Natureofaccount = c.String(),
                        Accountopennumber = c.String(),
                        Changesas = c.String(),
                        Customername1 = c.String(),
                        Postalcode = c.String(),
                        Phonenumber = c.String(),
                        Registered = c.String(),
                        Typeof = c.String(),
                        Documentnumber = c.String(),
                        Businessscope = c.String(),
                        Legal = c.String(),
                        Name = c.String(),
                        Typedocument = c.String(),
                        Idnumber = c.String(),
                        Affiliated = c.String(),
                        Dengjibiao = c.String(),
                        Thesuperior = c.String(),
                        Thename = c.String(),
                        Headofunit = c.String(),
                        Name1 = c.String(),
                        Typedocument1 = c.String(),
                        Idnumber1 = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Bgyhjszhsqs");
        }
    }
}
