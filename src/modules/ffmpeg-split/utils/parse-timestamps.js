/**
 * @param {string} input user input
 * @typedef {{String,String}} Stamp start and end time stamps
 * @returns {Stamp[]} time stamps
 */
export function parseTimestamps (input) {

    const lines = input.split ('\n')
    let timestamps = []

    lines.forEach ((line, index) => {

        const isTime = line.includes (':')
        const isStartTime = lines[index + 1]?.includes (':')

        if (isTime && isStartTime) {

            const start = line
            const end = lines[index + 1]

            timestamps = [
                ...timestamps,
                {
                    start,
                    end,
                },
            ]
        
        }
    
    })

    if (timestamps.length === 0) return null

    return timestamps

}