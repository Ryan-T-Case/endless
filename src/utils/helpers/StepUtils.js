import moment from "moment"

export class StepUtils {
    static getLatestVersionContent(step) {
        // We grab the first versionContent so we can compare it to the next
        console.log(step)
        let latestVersionContent = step.versionContent[0]

        // Since we have already grabbed the first versionContent, we can remove it
        // here before checking against the others
        step.versionContent.slice(1).forEach(versionData => {
            const currentVersionEffectiveDate = moment(
                versionData.effectiveDate
            )
            const latestVersionEffectiveDate = moment(
                latestVersionContent.effectiveDate
            )

            if (
                currentVersionEffectiveDate.isAfter(latestVersionEffectiveDate)
            ) {
                latestVersionContent = versionData
            }
        })

        return latestVersionContent
    }

    static sortStepsByStepNumber(steps) {
        const sortedSteps = steps.sort(
            (s1, s2) => parseInt(s1.stepNumber) - parseInt(s2.stepNumber)
        )

        return sortedSteps
    }
}
