import { StdFee } from "@cosmjs/stargate";
import { QueryAuditGet } from "./queryAuditGet";
import { QueryAuditList } from "./queryAuditList";
import { QueryCertList } from "./queryCertList";
import { QueryDeploymentGet } from "./queryDeploymentGet";
import { QueryDeploymentGroupGet } from "./queryDeploymentGroupGet";
import { QueryDeploymentList } from "./queryDeploymentList";
import { QueryMarketBidGet } from "./queryMarketBidGet";
import { QueryMarketBidList } from "./queryMarketBidList";
import { QueryMarketLeaseGet } from "./queryMarketLeaseGet";
import { QueryMarketLeaseList } from "./queryMarketLeaseList";
import { QueryMarketOrderGet } from "./queryMarketOrderGet";
import { QueryMarketOrderList } from "./queryMarketOrderList";
import { QueryProviderGet } from "./queryProviderGet";
import { QueryProviderList } from "./queryProviderList";
import { TxCertCreateClient } from "./txCertCreateClient";
import { TxCertRevoke } from "./txCertRevoke";

export interface TxParams {
  memo?: string,
  fee?: StdFee
}

export interface QueryCmd {
  audit: {
    get: QueryAuditGet,
    list: QueryAuditList
  },
  cert: {
    list: QueryCertList
  },
  deployment: {
    get: QueryDeploymentGet,
    group: {
      get: QueryDeploymentGroupGet
    },
    list: QueryDeploymentList
  },
  market: {
    bid: {
      get: QueryMarketBidGet
      list: QueryMarketBidList
    },
    lease: {
      get: QueryMarketLeaseGet,
      list: QueryMarketLeaseList
    },
    order: {
      get: QueryMarketOrderGet,
      list: QueryMarketOrderList
    }
  },
  provider: {
    get: QueryProviderGet,
    list: QueryProviderList
  }
}

export interface TxCmd {
  cert: {
    create: {
      client: TxCertCreateClient
    },
    revoke: TxCertRevoke
  }
}