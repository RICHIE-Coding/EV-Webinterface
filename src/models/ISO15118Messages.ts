export enum MessageState {
  SUCCESS = "bg-green-700",
  PROGRESS = "bg-yellow-500",
  FAILED = "bg-red-700",
  UNKNOWN = "bg-slate-600",
}

export const MessageTypesISO2 = {
  SLAC: "SLAC",
  SDP: "SDP",
  supportedAppProtocol: "supportedAppProtocolReq/-Res",
  SessionSetup: "SessionSetupReq/-Res",
  ServiceDiscovery: "ServiceDiscoveryReq/-Res",
  ServiceDetail: "ServiceDetailReq/-Res",
  PaymentServiceSelection: "PaymentServiceSelectionReq/-Res",
  CertificateInstallation: "CertificateInstallationReq/-Res",
  CertificateUpdate: "CertificateUpdateReq/-Res",
  PaymentDetails: "PaymentDetailsReq/-Res",
  Authorisation: "AuthorisationReq/-Res",
  ChargeParameterDiscovery: "ChargeParameterDiscoveryReq/-Res",
  PowerDelivery: "PowerDeliveryReq/-Res",
  ChargingStatus: "ChargingStatusReq/-Res",
  MeteringReceipt: "MeteringReceiptReq/-Res",
  SessionStop: "SessionStopReq/-Res",
};

export const MessageTypesISO20 = {
  SLAC: "SLAC",
  SDP: "SDP",
  SupportedAppProtocol: "supportedAppProtocolReq/-Res",
  SessionSetup: "SessionSetupReq/-Res",
  AuhorizationSetup: "AuthorizationSetupReq/-Res",
  CertificateInstallation: "CertificateInstallationReq/-Res",
  Authorization: "AuthorizationReq/-Res",
  ServiceDiscovery: "ServiceDiscoveryReq/-Res",
  ServiceDetail: "ServiceDetailReq/-Res",
  ServiceSelection: "ServiceSelectionReq/-Res",
  AC_ChargeParameterDiscovery: "AC_ChargeParameterDiscoveryReq/-Res",
  ScheduleExchange: "ScheduleExchangeReq/-Res",
  PowerDelivery: "PowerDeliveryReq/-Res",
  AC_ChargeLoop: "AC_ChargeLoopReq/-Res",
  SessionStop: "SessionStopReq/-Res",
};

export type Message = {
  key: { value: string };
  state: MessageState;
};
