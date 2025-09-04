import SectionHeading from '@/components/molecules/SectionHeading';
import WorkflowStepCard from '@/components/molecules/WorkflowStepCard';
import { workflowSteps } from '@/constants/workflow';
import React from 'react';

interface WorkflowSectionProps {
    className?: string;
}

export default function WorkflowSection({ className = '' }: WorkflowSectionProps) {
    return (
        <section className={`mx-auto max-w-screen-xl px-5 py-10 md:px-16 md:py-20 xl:px-20 ${className}`}>
            <SectionHeading
                subtitle="QUY TRÌNH LÀM VIỆC"
                title="Tại sao chọn iGara"
                description="iGara đã tối ưu hóa quy trình sửa chữa xe hơi thành một trải nghiệm thống nhất, đảm bảo chất lượng và hiệu quả cao nhất cho khách hàng."
                textAlign="left"
                maxWidth="full"
                className="mb-12"
            />

            {/* Progress indicator for desktop */}
            <div className="mx-auto my-0 hidden max-w-[calc(410px*3+24px*2)] items-center justify-center gap-x-4 lg:flex">
                {workflowSteps.map((step, index) => (
                    <React.Fragment key={step.id}>
                         <span className="bg-neutral-800 flex h-[42px] w-[42px] items-center justify-center rounded-full text-xl font-semibold">
                            {step.stepNumber}
                        </span>
                        {index < workflowSteps.length - 1 && (
                            <div className="bg-neutral-700 h-[1px] w-[calc(28%)] max-w-[365px]" />
                        )}
                    </React.Fragment>
                ))}
            </div>
            {/* <div className="mx-auto my-0 hidden max-w-[calc(410px*3+24px*2)] items-center justify-center gap-x-4 lg:flex">
                <span className="bg-neutral-800 flex h-[42px] w-[42px] items-center justify-center rounded-full text-xl font-semibold">
                    1
                </span>
                <div className="bg-neutral-700 h-[1px] w-[calc(28%)] max-w-[365px]" />
                <span className="bg-neutral-800 flex h-[42px] w-[42px] items-center justify-center rounded-full text-xl font-semibold">
                    2
                </span>
                <div className="bg-neutral-700 h-[1px] w-[calc(28%)] max-w-[365px]" />
                <span className="bg-neutral-800 flex h-[42px] w-[42px] items-center justify-center rounded-full text-xl font-semibold">
                    3
                </span>
            </div> */}
            {/* Workflow steps */}
            <div className="mt-6 flex max-w-[calc(410px*3+24px*2)] flex-col items-center justify-center gap-6 md:gap-y-10 lg:mx-auto lg:flex-row lg:justify-start">
                {workflowSteps.map((step) => (
                    <WorkflowStepCard
                        key={step.id}
                        stepNumber={step.stepNumber}
                        title={step.title}
                        description={step.description}
                        imageUrl={step.imageUrl}
                        imageAlt={step.imageAlt}
                    />
                ))}
            </div>
        </section>
    );
}
