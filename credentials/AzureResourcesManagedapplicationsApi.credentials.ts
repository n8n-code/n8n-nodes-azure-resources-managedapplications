import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureResourcesManagedapplicationsApi implements ICredentialType {
        name = 'N8nDevAzureResourcesManagedapplicationsApi';

        displayName = 'Azure Resources Managedapplications API';

        icon: Icon = { light: 'file:../nodes/AzureResourcesManagedapplications/azure-resources-managedapplications.png', dark: 'file:../nodes/AzureResourcesManagedapplications/azure-resources-managedapplications.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Resources Managedapplications API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
