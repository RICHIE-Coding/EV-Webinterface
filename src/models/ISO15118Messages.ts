export enum MessageState {
  SUCCESS = "SUCCESS",
  PROGRESS = "PROGRESS",
  FAILED = "FAILED",
  UNKNOWN = "UNKNOWN",
}

export type MessageTypeISO2 = {
  SLAC: string;
  SDP: string;
  SUPPORTED_APP_PROTOCOL: string;
  SESSION_SETUP: string;
  SERVICE_DISCOVERY: string;
  SERVICE_DETAIL: string;
  PAYMENT_SERVICE_SELECTION: string;
  CERTIFICATE_INSTALLATION: string;
  CERTIFICATE_UPDATE: string;
  PAYMENT_DETAILS: string;
  AUTHORISATION: string;
  CHARGE_PARAMETER_DISCOVERY: string;
  POWER_DELIVERY: string;
  CHARGING_STATUS: string;
  METERING_RECEIPT: string;
  SESSION_STOP: string;
};

export const MessageTypesISO2: MessageTypeISO2 = {
  SLAC: "SLAC",
  SDP: "SDP",
  SUPPORTED_APP_PROTOCOL: "supportedAppProtocolReq/-Res",
  SESSION_SETUP: "SessionSetupReq/-Res",
  SERVICE_DISCOVERY: "ServiceDiscoveryReq/-Res",
  SERVICE_DETAIL: "ServiceDetailReq/-Res",
  PAYMENT_SERVICE_SELECTION: "PaymentServiceSelectionReq/-Res",
  CERTIFICATE_INSTALLATION: "CertificateInstallationReq/-Res",
  CERTIFICATE_UPDATE: "CertificateUpdateReq/-Res",
  PAYMENT_DETAILS: "PaymentDetailsReq/-Res",
  AUTHORISATION: "AuthorisationReq/-Res",
  CHARGE_PARAMETER_DISCOVERY: "ChargeParameterDiscoveryReq/-Res",
  POWER_DELIVERY: "PowerDeliveryReq/-Res",
  CHARGING_STATUS: "ChargingStatusReq/-Res",
  METERING_RECEIPT: "MeteringReceiptReq/-Res",
  SESSION_STOP: "SessionStopReq/-Res",
};

export type MessageTypeISO20 = {
  SLAC: string;
  SDP: string;
  SUPPORTEDAPPPROTOCOL: string;
  SESSION_SETUP: string;
  AUTHORIZATION_SETUP: string;
  CERTIFICATE_INSTALLATION: string;
  AUTHORIZATION: string;
  SERVICE_DISCOVERY: string;
  SERVICE_DETAIL: string;
  SERVICE_SELECTION: string;
  AC_CHARGE_PARAMETER_DISCOVERY: string;
  SCHEDULE_EXCHANGE: string;
  POWER_DELIVERY: string;
  AC_CHARGELOOP: string;
  SESSION_STOP: string;
};

export const MessageTypesISO20: MessageTypeISO20 = {
  SLAC: "SLAC",
  SDP: "SDP",
  SUPPORTEDAPPPROTOCOL: "supportedAppProtocolReq/-Res",
  SESSION_SETUP: "SessionSetupReq/-Res",
  AUTHORIZATION_SETUP: "AuthorizationSetupReq/-Res",
  CERTIFICATE_INSTALLATION: "CertificateInstallationReq/-Res",
  AUTHORIZATION: "AuthorizationReq/-Res",
  SERVICE_DISCOVERY: "ServiceDiscoveryReq/-Res",
  SERVICE_DETAIL: "ServiceDetailReq/-Res",
  SERVICE_SELECTION: "ServiceSelectionReq/-Res",
  AC_CHARGE_PARAMETER_DISCOVERY: "AC_ChargeParameterDiscoveryReq/-Res",
  SCHEDULE_EXCHANGE: "ScheduleExchangeReq/-Res",
  POWER_DELIVERY: "PowerDeliveryReq/-Res",
  AC_CHARGELOOP: "AC_ChargeLoopReq/-Res",
  SESSION_STOP: "SessionStopReq/-Res",
};

export type Message = {
  name: { key: string; value: string };
  state: MessageState;
};
