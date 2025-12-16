export const convertEpochToString = (epoch: number): string => {
    const t = new Date(0)

    t.setUTCSeconds(epoch)

    return t.toLocaleString()
}

// From https://stackoverflow.com/a/1026087/4313368
export function capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1)
}
