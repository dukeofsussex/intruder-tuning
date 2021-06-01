import { TuningProperty } from '@/tunings/types';

const WeaponProperties: TuningProperty[] = [
    {
        name: 'Gun swerve threshold',
        id: 'gunSwerveTheshold',
        default: 20,
    },
    {
        name: 'Energy to sway on move',
        id: 'energyToSwayOnMove',
        default: 70,
    },
    {
        name: 'Medium to high energy threshold',
        id: 'medHighEnergy',
        default: 60,
    },
    {
        name: 'Low to medium energy threshold',
        id: 'lowMedEnergy',
        default: 30,
    },
    {
        decimals: 1,
        description: 'Lower values result in higher fire rates (don\'t ask)',
        name: 'Fire Rate',
        id: 'fireRate',
        step: 0.1,
        default: 0.3,
    },
    {
        decimals: 1,
        name: 'Fire Recover Rate',
        id: 'fireRecoverRate',
        step: 0.5,
        default: -1,
    },
    {
        decimals: 1,
        name: 'Fire Delay Time',
        id: 'fireDelayTime',
        step: 0.1,
        default: 0.0,
    },
    {
        decimals: 0,
        name: 'Maximum Rounds Per Clip',
        id: 'maxClipAmmo',
        step: 1,
        default: 30,
    },
    {
        name: 'Has semi auto?',
        id: 'hasSemiAuto',
        default: true,
    },
    {
        name: 'Has full auto?',
        id: 'hasFullAuto',
        default: true,
    },
    {
        name: 'Has burst shot?',
        id: 'hasBurstShot',
        default: false,
    },
    {
        decimals: 1,
        name: 'Reload Time',
        id: 'reloadTime',
        step: 0.1,
        default: 1.5,
    },
    {
        decimals: 1,
        name: 'Empty Reload Time',
        id: 'emptyReloadTime',
        step: 0.1,
        default: 2.3,
    },
    {
        name: 'Auto reload?',
        id: 'autoReload',
        default: false,
    },
    {
        name: 'Reload on equip?',
        id: 'reloadOnEquip',
        default: false,
    },
    {
        decimals: 1,
        name: 'Equip time',
        id: 'equipTime',
        step: 0.1,
        default: 0.5,
    },
    {
        decimals: 1,
        name: 'Unequip time',
        id: 'unequipTime',
        step: 0.1,
        default: 0,
    },
    {
        decimals: 1,
        name: 'Unequip delay',
        id: 'unequipDelay',
        step: 0.1,
        default: 0,
    },
    {
        name: 'Unequip on empty?',
        id: 'unequipOnEmpty',
        default: false,
    },
    {
        name: 'Remove from inventory on empty?',
        id: 'removeFromInventoryOnEmpty',
        default: false,
    },
    {
        decimals: 1,
        name: 'Shell Speed',
        id: 'shellSpeed',
        step: 0.1,
        default: 10.0,
    },
    {
        name: 'Shell eject?',
        id: 'shellEject',
        default: false,
    },
    {
        decimals: 1,
        name: 'Shell eject delay',
        id: 'shellEjectDelay',
        step: 0.1,
        default: 0,
    },
    {
        name: 'Has scope?',
        id: 'hasScope',
        default: false,
    },
    {
        name: 'Play gunfire empty sound?',
        id: 'playGunFireEmptySound',
        default: false,
    },
    {
        name: 'Can jump fire?',
        id: 'canJumpFire',
        default: true,
    },
    {
        name: 'Advanced recoil?',
        id: 'advancedRecoil',
        default: false,
    },
    {
        name: 'Has stock recoil?',
        id: 'hasStockRecoil',
        default: false,
    },
    {
        decimals: 1,
        name: 'Stock Recoil Recovery Speed',
        id: 'stockRecoilRecoverySpeed',
        step: 0.1,
        default: 5,
    },
    {
        decimals: 0,
        name: 'Recoil Balance',
        id: 'recoilBalance',
        step: 1,
        default: 3,
    },
    {
        decimals: 0,
        name: 'Precoil Balance',
        id: 'precoilBalance',
        step: 1,
        default: 0,
    },
    {
        decimals: 1,
        name: 'Focus Minimum',
        id: 'focusMinimum',
        step: 1,
        default: 0,
    },
    {
        decimals: 1,
        name: 'Focus multiplier',
        id: 'focusMultiplier',
        step: 1,
        default: 1,
    },
    {
        name: 'Can focus shot?',
        id: 'canFocusShot',
        default: false,
    },
    {
        name: 'No precoil zoomed?',
        id: 'noPrecoilZoomed',
        default: true,
    },
    {
        decimals: 0,
        name: 'Aim Down Sights Field Of View',
        id: 'aimDownSightsFov',
        step: 1,
        default: 50,
    },
    {
        decimals: 1,
        name: 'Extra Zooming Field Of View',
        id: 'extraZoomingFov',
        step: 1,
        default: 35,
    },
    {
        decimals: 2,
        name: 'Stance Energy Fire',
        id: 'stanceEnergyFire',
        step: 0.25,
        default: [
            -1.0,
            -1.75,
            -1.5,
            -1.5,
            -1.0,
            -1.0,
            -1.0,
        ],
    },
];

export default WeaponProperties;
