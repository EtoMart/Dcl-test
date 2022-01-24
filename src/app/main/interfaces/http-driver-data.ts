export interface HttpDriverData {
  id?: any;
  credential?: [
    {
      issue_date?: string;
      issue_point?: string;
      issue_point_code?: string;
      number?: string;
      series?: string;
      credential_type?: string
    }
  ];
  address?: [];
  person?: string;
  fact_address?: string;
  legal_address?: string;
  contact?: [];
  first_name?: string;
  last_name?: string;
  patronymic?: string;
  previous_last_name?: string;
  birth_date?: string;
  gender?: string;
  driving_experience_started?: string;
  is_rsa_checked?: boolean;
  is_kbm_found?: boolean;
  kbm_value?: number;
  previous_policy_serial?: number;
  previous_policy_number?: number;

}
