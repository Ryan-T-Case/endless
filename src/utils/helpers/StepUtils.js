import moment from "moment"

export class StepUtils {
    static getLatestVersionedContent(step) {
        // We grab the first versionedContent so we can compare it to the next
        let latestVersionedContent = step.versionedContent[0]

        // Since we have already grabbed the first versionContent, we can remove it
        // here before checking against the others
        step.versionedContent.slice(1).forEach(versionData => {
            const currentVersionEffectiveDate = moment(
                versionData.effectiveDate
            )
            const latestVersionEffectiveDate = moment(
                latestVersionedContent.effectiveDate
            )

            if (
                currentVersionEffectiveDate.isAfter(latestVersionEffectiveDate)
            ) {
                latestVersionedContent = versionData
            }
        })

        return latestVersionedContent
    }

    static sortStepsByStepNumber(steps) {
        const sortedSteps = steps.sort(
            (s1, s2) => parseInt(s1.stepNumber) - parseInt(s2.stepNumber)
        )

        return sortedSteps
    }
}
