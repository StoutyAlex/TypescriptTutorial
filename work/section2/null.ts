
// Nullable types
let canBeNull: number | null = 12;
canBeNull = null;

// undefined by default
let canAlsoBeNull;
canAlsoBeNull = null;

// Can configure null strict check in config
// "strictNullChecks": false

// turning on means undefined can be asigned to null but (canBeNull) anything else cannot
// can be null if specified with the type overrides the strict flag

let canThisBeAny = null;
canThisBeAny = 12;
// Cannot reasign null when strict is enabled, if it is disabled this is fine