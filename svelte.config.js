/**
    * @description      : 
    * @author           : Administrator
    * @group            : 
    * @created          : 01/04/2024 - 15:14:18
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/04/2024
    * - Author          : Administrator
    * - Modification    : 
**/
import preprocessor from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-vercel';

const config = {
	preprocess: preprocessor({
		scss: {
			prependData: `@use './src/styles/variables.scss' as *;`
		}
	}),
	kit: {
		adapter: adapter({
			runtime: 'nodejs18.x',
		}),
	}
};

export default config;
