export enum MessageState {
  SUCCESS = "SUCCESS",
  PROGRESS = "PROGRESS",
  FAILED = "FAILED",
  UNKNOWN = "UNKNOWN",
}

export interface Message {
  name: MessageNameISO2;
  state: MessageState;
}

export enum MessageNameISO2 {
  SLAC = "SLAC",
  SDP = "SDP",
  SUPPORTED_APP_PROTOCOL = "supportedAppProtocolReq/-Res",
  SESSION_SETUP = "SessionSetupReq/-Res",
  SERVICE_DISCOVERY = "ServiceDiscoveryReq/-Res",
  SERVICE_DETAIL = "ServiceDetailReq/-Res",
  PAYMENT_SERVICE_SELECTION = "PaymentServiceSelectionReq/-Res",
  CERTIFICATE_INSTALLATION = "CertificateInstallationReq/-Res",
  CERTIFICATE_UPDATE = "CertificateUpdateReq/-Res",
  PAYMENT_DETAILS = "PaymentDetailsReq/-Res",
  AUTHORISATION = "AuthorisationReq/-Res",
  CHARGE_PARAMETER_DISCOVERY = "ChargeParameterDiscoveryReq/-Res",
  POWER_DELIVERY = "PowerDeliveryReq/-Res",
  CHARGING_STATUS = "ChargingStatusReq/-Res",
  METERING_RECIPT = "MeteringReciptReq/-Res",
  SESSION_STOP = "SessionStopReq/-Res",
}
