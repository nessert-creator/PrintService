using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abp.Domain.Repositories;
using QC.MF.jinzhangdan.Dto;

namespace QC.MF.jinzhangdan
{
    public class JinzhangdanAppService : MFAppServiceBase, IJinzhangdanAppService
    {

        private readonly IRepository<jinzhangdans.jinzhangdan, int> _jinzhangdanRepository;
        public JinzhangdanAppService(
           IRepository<jinzhangdans.jinzhangdan, int> repository
           ) 
        {
            _jinzhangdanRepository = repository;
        }
        public async Task<GetJinzhangdanOutput> GetJinzhangdans(GetJinzhangdanInput input)
        {
            var result = await _jinzhangdanRepository.GetAllListAsync();
            return result.Select(v => new GetJinzhangdanOutput { Id = v.Id }).First();
        }
    }
}
