import { FeatureLimits, Limits } from '../common';

export interface Allocation {
    id:         number;
    ip:         string;
    alias:      string | undefined;
    port:       number;
    notes:      string | undefined;
    assigned:   boolean;
}

export interface CreateNodeOptions {
    name:                   string;
    location:               string;
    fqdn:                   string;
    scheme:                 string;
    memory:                 number;
    memoryOverallocate?:    number;
    disk:                   number;
    diskOverallocate?:      number;
    sftp:{
        port:               number;
        listener:           number;
    };
    uploadSize?:            number;
}

export interface CreateUserOptions {
    email:      string;
    username:   string;
    firstname:  string;
    lastname:   string;
    password?:  string;
    isAdmin?:   boolean;
}

export interface CreateServerOptions {
    name:           string;
    egg:            number;
    image:          string;
    startup:        string;
    env:            Record<string, string>;
    allocation:     number;
    limits:         Partial<Limits>;
    featureLimits:  Partial<FeatureLimits>;
}

export interface Egg {
    id:                 number;
    uuid:               string;
    nest:               number;
    name:               string;
    description:        string;
    author:             string;
    dockerImage:        string;
    dockerImages:       string[]; // not sure why this is here
    config:{
        files:          Record<string, any>;
        startup:        Record<string, any>;
        stop:           string;
        logs:           string[];
        fileDenylist:   string[];
        extends:        string | null;
    };
    startup:            string;
    script:{
        privileged:     boolean;
        install:        string;
        entry:          string;
        container:      string;
        extends:        string | null;
    }
    createdAt:          Date;
    updatedAt:          Date | undefined;
}

export interface Nest {
    id:             number;
    uuid:           string;
    author:         string;
    name:           string;
    description:    string;
    createdAt:      Date;
    updatedAt:      Date | undefined;
}

export interface NodeConfiguration {
    uuid:               string;
    tokenId:            string;
    token:              string;
    debug:              boolean;
    api:{
        host:           string;
        port:           number;
        ssl:{
            enabled:    boolean;
            cert:       string;
            key:        string;
        };
        uploadLimit:    number;
    };
    system:{
        data:           string;
        sftp:{
            bindPort:   number;
        };
    };
    allowedMounts:      string[];
    remote:             string;
}

export interface NodeDeploymentOptions {
    memory:         number;
    disk:           number;
    locationIds?:   number[];
}

export interface UpdateBuildOptions extends Partial<Limits & FeatureLimits> {
    allocation?:        number;
    oomDisabled?:       boolean;
    addAllocations?:    number[];
    removeAllocations?: number[];
}

export interface UpdateDetailsOptions {
    name?:          string;
    owner?:         number;
    externalId?:    string;
    description?:   string;
}

export interface UpdateStartupOptions {
    startup?:       string;
    environment?:   Record<string, string>;
    egg?:           number;
    image?:         string;
    skipScripts?:   boolean;
}

export interface UpdateUserOptions extends CreateUserOptions {
    password: string;
}
