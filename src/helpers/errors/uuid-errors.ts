import { baseErrors } from './base-errors';

import { generatorUUID } from '../../core/generators/G-UUID';

import { _UUID } from '../../helpers/types/type-UUID'

export class uuidErrors extends baseErrors 
{
    static ensureGenerator(uuid: _UUID) 
    {
        if(generatorUUID() == null) return this.throwGenerationFailed("UUID")
    }

    static ensureValidator(uuid: _UUID) 
    {
        if(!uuid) return this.throwMissing("UUID")
    }
}