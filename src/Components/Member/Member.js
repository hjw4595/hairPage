import React from "react";
import { getMember, getNotComingList } from "../../api/member";
import MemberPresenter from "./MemberPresenter";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state = {
    result: null, 
    error: null,
    loading: true,
  };

  async componentDidMount() {
    let member = null;
    let monthMember = null;
    try {
      ({ data: member } = await getMember());
      ({ data: monthMember } = await getNotComingList());
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, member ,monthMember });
    }
  }

  render() {
    const { member, monthMember, error, loading } = this.state;
    return <MemberPresenter member={member} monthMember={monthMember} error={error} loading={loading} />
  }
}