import Image from "next/image";

const WorkInProgressPage = () => {
  return (
    <div>
      <div className="wrapper flex py-10 items-center justify-center">
        <div className="space-y-8 text-center">
          <Image
            src="/workinprogress.svg"
            alt="work-in-progress"
            width={800}
            height={800}
          />
          <div className="space-y-3">
            <h4 className="heading-4 text-primary">Work In Progress</h4>
            <p className="subtitle-text text-secondary-foreground">
              We're working on it!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WorkInProgressPage;
