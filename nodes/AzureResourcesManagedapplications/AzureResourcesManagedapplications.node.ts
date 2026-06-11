import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureResourcesManagedapplications implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Azure Resources Managedapplications',
		name: 'N8nDevAzureResourcesManagedapplications',
		icon: { light: 'file:./azure-resources-managedapplications.png', dark: 'file:./azure-resources-managedapplications.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'ARM applications',
		defaults: { name: 'Azure Resources Managedapplications' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAzureResourcesManagedapplicationsApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
		],
	};
}
