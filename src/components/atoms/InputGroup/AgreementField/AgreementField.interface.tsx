export interface AgreementFieldProps {
  agreed: boolean;
  label?: string;
  checked?: boolean;
  setAgreed: (value: boolean) => void;
}
