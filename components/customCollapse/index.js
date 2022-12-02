export default function CustomCollapse({ title, content }) {
  return (
    <div className="collapse collapse-plus	">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-bold md:text-[16px] xs:text-[14px]">
        {title}
      </div>
      <div className="collapse-content">
        <p className="text-[16px]">{content}</p>
      </div>
    </div>
  );
}
