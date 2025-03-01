const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const addArticleRepo = async (data) => {
  const article = await prisma.rate_article.create({
    data: data,
  });
  return article;
};

const addRateSosmedRepo = async (data) => {
  const sosmed = await prisma.rate_sosmed.create({
    data: data,
  });
  return sosmed;
};

const addOtherContentRepo = async (data) => {
  const other = await prisma.rate_other_content.create({
    data: data,
  });
  return other;
};

const addCPDRepo = async (data) => {
  const cpd = await prisma.rate_cpd.create({
    data: data,
  });
  return cpd;
};

const addCPMRepo = async (data) => {
  const cpm = await prisma.rate_cpm.create({
    data: data,
  });
  return cpm;
};

const getArticleAllRepo = async () => {
    const article  = prisma.rate_article.findMany()
    return article
}

const getRateSosmedRepo = async (status) => {
    const meta = prisma.rate_sosmed.findMany({
        where: {
            is_other : status
        }
    })

    return meta
}

const getRateOtherRepo = async () => {
    const otherContent = await prisma.rate_other_content.findMany()
    return otherContent
}

const getCpdRepo = async () => {
    const cpd = await prisma.rate_cpd.findMany()
    return cpd
}

const getAllCpmRepo = async () => {
    const cpm = await prisma.rate_cpm.findMany()
    
    return cpm
}

const getArtikrelByIdRepo = async (id) => {
  const artikel = await prisma.rate_article.findUnique({
    where: {
      id
    }
  })
  return artikel
}

const getSosmedByIdRepo = async (id) => {
  return await prisma.rate_sosmed.findUnique({
    where: {
      id
    }
  })
}

const getOtherByIdRepo = async (id) => {
  return await prisma.rate_other_content.findUnique({
    where: {
      id
    }
  })
}

const getCpdByIdRepo = async (id) => {
  return await prisma.rate_cpd.findUnique({
    where: {
      id
    }
  })
}

const getCpmByIdRepo = async (id) => {
  return await prisma.rate_cpm.findUnique({
    where: {
      id
    }
  })
}

const editArticel = async (id, data) => {
    return await prisma.rate_article.update({
      where: {
        id
      },
      data
    })
}

const editSosmed = async (id, data) => {
  return await prisma.rate_sosmed.update({
    where: {
      id
    },
    data
  })
}

const editOther = async (id, data) => {
  return await prisma.rate_other_content.update({
    where: {
      id
    },
    data
  })
}

const editCpdRepo = async (id, data) => {
  return prisma.rate_cpd.update({
    where: {
      id
    },
    data
  })
}

const editCpmRepo = async (id, data) => {
  return prisma.rate_cpm.update({
    where: {
      id
    },
    data
  })
}

const deleteArticleRepo = async (id) => {
  return prisma.rate_article.update({
    where: {
      id
    },
    data: {
      is_deleted: true
    }
  })
}

const deleteSosmedRepo = async (id) => {
  return prisma.rate_sosmed.update({
    where: {
      id
    },
    data: {
      is_deleted: true
    }
  })
}

const deleteOtherRepo = async (id) => {
  return prisma.rate_other_content.update({
    where: {
      id
    },
    data: {
      is_deleted: true
    }
  })
}

const deleteCpdRepo = async (id) => {
  return prisma.rate_cpd.update({
    where: {
      id
    },
    data: {
      is_deleted: true
    }
  })
}

const deleteCpmRepo = async (id) => {
  return prisma.rate_cpm.update({
    where: {
      id
    },
    data: {
      is_deleted: true
    }
  })
}

module.exports = {
  addArticleRepo,
  addRateSosmedRepo,
  addOtherContentRepo,
  addCPDRepo,
  addCPMRepo,
  getArticleAllRepo,
  getRateSosmedRepo,
  getRateOtherRepo,
  getCpdRepo,
  getAllCpmRepo,
  getArtikrelByIdRepo,
  getSosmedByIdRepo,
  getOtherByIdRepo,
  getCpdByIdRepo,
  getCpmByIdRepo,
  editArticel,
  deleteArticleRepo,
  editSosmed,
  deleteSosmedRepo,
  editOther,
  deleteOtherRepo,
  editCpdRepo,
  deleteCpdRepo,
  editCpmRepo,
  deleteCpmRepo
};
