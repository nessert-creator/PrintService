﻿using Abp.Domain.Entities;
using Abp.Domain.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.PreviousAndNexts
{
    public class PreviousAndNext<TEntity>
    where TEntity : class, IIdNameEntity
    {
        /// <summary>
        /// 上一个
        /// </summary>
        public virtual int? PreviousId { get; set; }
        /// <summary>
        /// 上一个
        /// </summary>
        public virtual string PreviousName { get; set; }
        /// <summary>
        /// 下一个
        /// </summary>
        public virtual int? NextId { get; set; }
        /// <summary>
        /// 下一个
        /// </summary>
        public virtual string NextName { get; set; }

        public PreviousAndNext(IRepository<TEntity,int> entityRepository, int id)
        {
            var Previous = entityRepository.GetAll()
                .Where(x => x.Id < id)
                .OrderByDescending(x => x.Id)
                .FirstOrDefault();
            PreviousId = Previous?.Id;
            PreviousName = Previous?.Name;

            var  Next = entityRepository.GetAll()
                .Where(x => x.Id > id)
                .OrderBy(x => x.Id)
                .FirstOrDefault();
            NextId = Next?.Id;
            NextName = Next?.Name;
        }

    }
    //public class PreviousAndNextDto
    //{
    //    public static PreviousAndNextDto<TEntity> Create<TEntity>(IRepository<TEntity, int> entityRepository, int id)
    //    where TEntity : class, IIdNameEntity
    //    {
    //        return new PreviousAndNextDto<TEntity>(entityRepository, id);
    //    }

    //}
}
