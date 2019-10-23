using Abp.Application.Services;
using QC.MF.jinzhangdan.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.jinzhangdan
{
    public interface IJinzhangdanAppService : IApplicationService
    {
        Task<GetJinzhangdanOutput> GetJinzhangdans(GetJinzhangdanInput input);
    }
}
