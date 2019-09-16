using Abp.Domain.Repositories;
using QC.MF.CommonDto;
using QC.MF.Xianjinjiaokuandan.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Xianjinjiaokuandan
{
    public class XianjinjiaokuandanAppService : AsyncMFCrudAppService<Xianjinjiaokuandan, GetListXianjinjiaokuandanDto, PagedSortedAndFilteredInputDto, CreateXianjinjiaokuandanDto, UpdateXianjinjiaokuandanDto>, IXianjinjiaokuandanAppService
    {
        public XianjinjiaokuandanAppService(IRepository<Xianjinjiaokuandan, int> repository) : base(repository)
        {
        }
    }
}
