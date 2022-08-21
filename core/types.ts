export interface Result<Data extends Record<string, any> | string> {
	type: 'gameElement';
	data: Data;
}

export interface Namespace {
	/** The project namespace defined in `config.json`. */
	namespace: string;
}
