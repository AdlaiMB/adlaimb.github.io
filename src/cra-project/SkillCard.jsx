export default function SkillCard({ name, link }) {
  return (
    <div className="skill-card">
      <div className="bg"></div>
      <img src={`/skills/${link}`} alt={name} width="68" height="68" />
      <p className="semibold-font-weight">{name}</p>
    </div>
  );
}
