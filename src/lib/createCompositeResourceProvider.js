export default function createCompositeResourceProvider (resourceProviders) {
	let resourceResourceProviderMap = new Map();
	
	return {getResources, compileResource};
	
	async function getResources () {
		return Promise.all(resourceProviders.map(resourceProvider => {
			return resourceProvider.getResources()
				.then(resources => {
					resources.forEach(resource => {
						resourceResourceProviderMap.set(resource, resourceProvider);
					});

					return resources;
				});
		}))
		.then(resourceProvidersResources => {
			return [].concat.apply([], resourceProvidersResources);
		});
	}

	async function compileResource (resource, resourceCompilationContext) {
		let resourceProvider = resourceResourceProviderMap.get(resource);

		if (!resourceProvider) {
			throw new Error(`No resource provider found for resource ${resource.id}`);
		}

		return resourceProvider.compileResource(resource, resourceCompilationContext);
	}
}