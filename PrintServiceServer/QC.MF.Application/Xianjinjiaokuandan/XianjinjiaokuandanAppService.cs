using Abp.Domain.Repositories;
using QC.MF.Authorization;
using QC.MF.Demos.Dto;
using QC.MF.PreviousAndNexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using QC.MF.CommonDto;
using QC.MF.Xianjinjiaokuandan.Dto;
using Abp.Application.Services;
using Abp.Application.Services.Dto;

namespace QC.MF.xianjinjiaokuandan
{
    public class XianjinjiaokuandanAppService 
        : AsyncMFCrudAppService<Xianjinjiaokuandans.Xianjinjiaokuandan,
            GetListXinjinjiaokuandanDto, PagedSortedAndFilteredInputDto, Xianjinjiaokuandan.Dto.CreateXinjinjiaokuandanDto, UpdateXinjinjiaokuandanDto>,
        Xianjinjiaokuandan.IXianjinjiaokuandanAppService
    {
        public XianjinjiaokuandanAppService(
            IRepository<Xianjinjiaokuandans.Xianjinjiaokuandan, int> repository
            ) : base(repository)
        {
        }
    }
}
